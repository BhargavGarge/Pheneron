"use client";

import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Mail,
  Plus,
  Settings,
  Webhook,
  Zap,
} from "lucide-react";

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

const NODE_WIDTH = 220;
const NODE_HEIGHT = 110;

const nodeTemplates: Omit<WorkflowNode, "id" | "position">[] = [
  {
    type: "trigger",
    title: "Operational Audit",
    description: "Identify workflow inefficiencies",
    icon: Webhook,
    color: "emerald",
  },
  {
    type: "action",
    title: "Workflow Mapping",
    description: "Map operational dependencies",
    icon: Database,
    color: "blue",
  },
  {
    type: "condition",
    title: "Automation Layer",
    description: "Build scalable process systems",
    icon: Settings,
    color: "amber",
  },
  {
    type: "action",
    title: "Execution Engine",
    description: "Eliminate repetitive tasks",
    icon: Mail,
    color: "purple",
  },
  {
    type: "action",
    title: "Operational Control",
    description: "Centralize visibility & monitoring",
    icon: Zap,
    color: "indigo",
  },
];

const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    type: "trigger",
    title: "Operational Audit",
    description: "Identify workflow inefficiencies",
    icon: Webhook,
    color: "emerald",
    position: { x: 50, y: 120 },
  },
  {
    id: "node-2",
    type: "action",
    title: "Workflow Mapping",
    description: "Map operational dependencies",
    icon: Database,
    color: "blue",
    position: { x: 340, y: 120 },
  },
  {
    id: "node-3",
    type: "condition",
    title: "Automation Layer",
    description: "Build scalable process systems",
    icon: Settings,
    color: "amber",
    position: { x: 630, y: 120 },
  },
  {
    id: "node-4",
    type: "action",
    title: "Execution Engine",
    description: "Eliminate repetitive tasks",
    icon: Mail,
    color: "purple",
    position: { x: 920, y: 120 },
  },
  {
    id: "node-5",
    type: "action",
    title: "Operational Control",
    description: "Centralize visibility & monitoring",
    icon: Zap,
    color: "indigo",
    position: { x: 1210, y: 120 },
  },
];

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

export function PheneronWorkflowBlock() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);

  const [connections, setConnections] =
    useState<WorkflowConnection[]>(initialConnections);

  const canvasRef = useRef<HTMLDivElement>(null);

  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);

  const [contentSize, setContentSize] = useState(() => {
    const maxX = Math.max(
      ...initialNodes.map((n) => n.position.x + NODE_WIDTH),
    );

    const maxY = Math.max(
      ...initialNodes.map((n) => n.position.y + NODE_HEIGHT),
    );

    return {
      width: maxX + 80,
      height: maxY + 80,
    };
  });

  const handleDragStart = (nodeId: string) => {
    setDraggingNodeId(nodeId);

    const node = nodes.find((n) => n.id === nodeId);

    if (node) {
      dragStartPosition.current = {
        x: node.position.x,
        y: node.position.y,
      };
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
            ? {
                ...node,
                position: {
                  x: constrainedX,
                  y: constrainedY,
                },
              }
            : node,
        ),
      );
    });

    setContentSize((prev) => ({
      width: Math.max(prev.width, constrainedX + NODE_WIDTH + 80),
      height: Math.max(prev.height, constrainedY + NODE_HEIGHT + 80),
    }));
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  const addNode = () => {
    const template =
      nodeTemplates[Math.floor(Math.random() * nodeTemplates.length)];

    const lastNode = nodes[nodes.length - 1];

    const newPosition = lastNode
      ? {
          x: lastNode.position.x + 290,
          y: lastNode.position.y,
        }
      : {
          x: 50,
          y: 120,
        };

    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      ...template,
      position: newPosition,
    };

    flushSync(() => {
      setNodes((prev) => [...prev, newNode]);

      if (lastNode) {
        setConnections((prev) => [
          ...prev,
          {
            from: lastNode.id,
            to: newNode.id,
          },
        ]);
      }
    });

    setContentSize((prev) => ({
      width: Math.max(prev.width, newPosition.x + NODE_WIDTH + 80),
      height: Math.max(prev.height, newPosition.y + NODE_HEIGHT + 80),
    }));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-6">
      {/* HEADER */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <Badge className="mb-3 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-purple-400">
            Operational Infrastructure
          </Badge>

          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-white md:text-4xl">
            Businesses don’t break because of lack of effort.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base">
            They break because operations become dependent on manual work,
            scattered communication, and disconnected systems.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={addNode}
          className="h-10 self-start sm:self-auto rounded-xl border-white/10 bg-white/5 px-4 text-xs uppercase tracking-[0.2em] text-white/70 hover:bg-white/10 hover:text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Workflow
        </Button>
      </div>

      {/* WORKFLOW CANVAS */}
      <div
        ref={canvasRef}
        className="relative h-70 sm:h-100 md:h-137.5 overflow-auto rounded-2xl border border-white/10 bg-black/40"
      >
        <div
          className="relative"
          style={{
            minWidth: contentSize.width,
            minHeight: contentSize.height,
          }}
        >
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            width={contentSize.width}
            height={contentSize.height}
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

          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                }}
                className="absolute cursor-grab"
                whileHover={{ scale: 1.02 }}
                whileDrag={{
                  scale: 1.05,
                  zIndex: 50,
                  cursor: "grabbing",
                }}
              >
                <Card
                  className={`relative overflow-hidden rounded-2xl border ${colorClasses[node.color]} bg-black/70 p-4 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colorClasses[node.color]} bg-black/70`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <Badge
                          variant="outline"
                          className="mb-1 rounded-full border-white/10 bg-white/5 px-2 py-0 text-[9px] uppercase tracking-[0.2em] text-white/50"
                        >
                          {node.type}
                        </Badge>

                        <h3 className="text-sm font-semibold text-white">
                          {node.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-white/60">
                      {node.description}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <ArrowRight className="h-3 w-3" />
                      Connected Infrastructure
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
        <div className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.2em] text-white/40">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            {nodes.length} Nodes
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            {connections.length} Connections
          </div>
        </div>

        <p className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-white/30">
          Drag workflows to reorganize infrastructure
        </p>
      </div>
    </div>
  );
}
