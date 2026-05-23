"use client";

import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Map, Hammer, Zap, Eye } from "lucide-react";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
}

interface WorkflowConnection {
  from: string;
  to: string;
}

const NODE_WIDTH = 160;
const NODE_HEIGHT = 100;

const getInitialNodes = (isMobile: boolean): WorkflowNode[] => {
  const baseSpacing = isMobile ? 200 : 250;
  const startX = isMobile ? 15 : 50;

  return [
    {
      id: "node-1",
      type: "trigger",
      title: "Identify Bottlenecks",
      description: "Find operational pain points",
      icon: Lightbulb,
      color: "emerald",
      position: { x: startX, y: 50 },
    },
    {
      id: "node-2",
      type: "action",
      title: "Map Workflows",
      description: "Document inefficiencies",
      icon: Map,
      color: "blue",
      position: { x: startX + baseSpacing * 1, y: 50 },
    },
    {
      id: "node-3",
      type: "action",
      title: "Build Systems",
      description: "Design custom solutions",
      icon: Hammer,
      color: "amber",
      position: { x: startX + baseSpacing * 2, y: 50 },
    },
    {
      id: "node-4",
      type: "action",
      title: "Automate Processes",
      description: "Eliminate manual work",
      icon: Zap,
      color: "purple",
      position: { x: startX + baseSpacing * 3, y: 50 },
    },
    {
      id: "node-5",
      type: "condition",
      title: "Centralize Control",
      description: "Real-time visibility",
      icon: Eye,
      color: "indigo",
      position: { x: startX + baseSpacing * 4, y: 50 },
    },
  ];
};

const initialConnections: WorkflowConnection[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" },
  { from: "node-3", to: "node-4" },
  { from: "node-4", to: "node-5" },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400",
};

function WorkflowConnectionLine({
  from,
  to,
  nodes,
}: {
  from: string;
  to: string;
  nodes: WorkflowNode[];
}) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;

  const startX = fromNode.position.x + NODE_WIDTH;
  const startY = fromNode.position.y + NODE_HEIGHT / 2;
  const endX = toNode.position.x;
  const endY = toNode.position.y + NODE_HEIGHT / 2;

  const cp1X = startX + (endX - startX) * 0.5;
  const cp2X = endX - (endX - startX) * 0.5;

  const path = `M${startX},${startY} C${cp1X},${startY} ${cp2X},${endY} ${endX},${endY}`;

  return (
    <path
      d={path}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeDasharray="8,6"
      strokeLinecap="round"
      opacity={0.35}
      className="text-foreground"
    />
  );
}

export function PhenersonWorkflowBlock() {
  const [isMobile, setIsMobile] = useState(false);
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);
  const [connections, setConnections] =
    useState<WorkflowConnection[]>(initialConnections);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState({ width: 1200, height: 200 });

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const initialNodesData = getInitialNodes(mobile);
      setNodes(initialNodesData);

      const maxX = Math.max(...initialNodesData.map((n) => n.position.x + NODE_WIDTH));
      const maxY = Math.max(...initialNodesData.map((n) => n.position.y + NODE_HEIGHT));
      setContentSize({ width: maxX + 30, height: maxY + 80 });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragStart = (nodeId: string) => {
    setDraggingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      dragStartPosition.current = { x: node.position.x, y: node.position.y };
    }
  };

  const handleDrag = (nodeId: string, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;

    const newX = dragStartPosition.current.x + offset.x;
    const newY = dragStartPosition.current.y + offset.y;

    const constrainedX = Math.max(0, newX);
    const constrainedY = Math.max(0, newY);

    flushSync(() => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId
            ? { ...node, position: { x: constrainedX, y: constrainedY } }
            : node
        )
      );
    });

    setContentSize((prev) => ({
      width: Math.max(prev.width, constrainedX + NODE_WIDTH + 30),
      height: Math.max(prev.height, constrainedY + NODE_HEIGHT + 30),
    }));
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  if (nodes.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur p-3 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400"
          >
            Active
          </Badge>
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-foreground/50">
            How It Works
          </span>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative h-64 w-full overflow-auto rounded-xl border border-border/30 bg-background/40 sm:h-96"
        role="region"
        aria-label="Workflow canvas"
        tabIndex={0}
      >
        {/* Content Wrapper */}
        <div
          className="relative"
          style={{
            minWidth: contentSize.width,
            minHeight: contentSize.height,
          }}
        >
          {/* SVG Connections */}
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            width={contentSize.width}
            height={contentSize.height}
            style={{ overflow: "visible" }}
            aria-hidden="true"
          >
            {connections.map((c) => (
              <WorkflowConnectionLine
                key={`${c.from}-${c.to}`}
                from={c.from}
                to={c.to}
                nodes={nodes}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const Icon = node.icon;
            const isDragging = draggingNodeId === node.id;

            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                dragConstraints={{
                  left: 0,
                  top: 0,
                  right: 100000,
                  bottom: 100000,
                }}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                  transformOrigin: "0 0",
                }}
                className="absolute cursor-grab"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
                aria-grabbed={isDragging}
              >
                <Card
                  className={`group/node relative w-full overflow-hidden rounded-lg border ${colorClasses[node.color]} bg-background/70 p-2 sm:p-3 backdrop-blur transition-all hover:shadow-lg ${isDragging ? "shadow-xl ring-2 ring-primary/50" : ""}`}
                  role="article"
                  aria-label={`${node.type} node: ${node.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/node:opacity-100" />

                  <div className="relative space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border ${colorClasses[node.color]} bg-background/80 backdrop-blur`}
                        aria-hidden="true"
                      >
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Badge
                          variant="outline"
                          className="mb-0.5 rounded-full border-border/40 bg-background/80 px-1 py-0 text-[7px] sm:text-[9px] uppercase tracking-[0.1em] text-foreground/60"
                        >
                          {node.type}
                        </Badge>
                        <h3 className="truncate text-[10px] sm:text-xs font-semibold tracking-tight text-foreground">
                          {node.title}
                        </h3>
                      </div>
                    </div>
                    <p className="line-clamp-1 text-[8px] sm:text-[10px] leading-relaxed text-foreground/70">
                      {node.description}
                    </p>
                    <div className="flex items-center gap-1 text-[7px] sm:text-[10px] text-foreground/50">
                      <ArrowRight className="h-2 w-2" aria-hidden="true" />
                      <span className="uppercase tracking-[0.05em]">Connected</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats */}
      <div
        className="mt-3 sm:mt-4 flex flex-wrap items-center justify-between gap-2 sm:gap-3 rounded-lg border border-border/30 bg-background/40 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-sm text-[11px] sm:text-xs text-foreground/60"
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span className="uppercase tracking-[0.1em]">
              {nodes.length} {nodes.length === 1 ? "Step" : "Steps"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span className="uppercase tracking-[0.1em]">
              {connections.length}{" "}
              {connections.length === 1 ? "Link" : "Links"}
            </span>
          </div>
        </div>
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] text-foreground/40">
          Drag to reposition
        </p>
      </div>
    </div>
  );
}
