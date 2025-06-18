"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface GroupedSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const foodOptions = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "blueberry", label: "Blueberry" },
      { value: "grapes", label: "Grapes" },
      { value: "pineapple", label: "Pineapple" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "aubergine", label: "Aubergine" },
      { value: "broccoli", label: "Broccoli" },
      { value: "carrot", label: "Carrot", disabled: true },
      { value: "leek", label: "Leek" },
    ],
  },
  {
    label: "Meat",
    items: [
      { value: "beef", label: "Beef" },
      { value: "chicken", label: "Chicken" },
      { value: "lamb", label: "Lamb" },
    ],
  },
];

export function GroupedSelect({
  value = "grapes",
  onValueChange,
  placeholder = "Select an option",
  className,
}: GroupedSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedItem = React.useMemo(() => {
    for (const group of foodOptions) {
      const item = group.items.find((item) => item.value === value);
      if (item) return item;
    }
    return null;
  }, [value]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative w-[204px] max-w-full", className)}
    >
      {/* Select Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-normal leading-6 text-slate-900 transition-colors hover:bg-white focus:outline-none focus:ring-0 focus:border-slate-400"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="flex-1 text-left truncate">
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Select Options */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1.5 w-full min-w-[204px] rounded-md border border-slate-100 bg-white shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-100">
          <div className="flex flex-col max-h-64 overflow-y-auto">
            {foodOptions.map((group, groupIndex) => (
              <React.Fragment key={group.label}>
                {/* Group Header */}
                <div className="flex flex-col bg-white px-[5px] pt-[5px] pb-0">
                  <div className="flex items-center px-2 py-1.5 pl-8">
                    <span className="flex-1 text-sm font-medium leading-5 text-slate-900">
                      {group.label}
                    </span>
                  </div>
                </div>

                {/* Group Items */}
                <div className="flex flex-col bg-white px-[5px] pb-[5px]">
                  {group.items.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      disabled={item.disabled}
                      onClick={() => {
                        if (!item.disabled) {
                          onValueChange?.(item.value);
                          setIsOpen(false);
                        }
                      }}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 text-left transition-colors",
                        "text-sm font-medium leading-5",
                        item.disabled
                          ? "cursor-not-allowed text-slate-600 opacity-50"
                          : "cursor-pointer text-slate-600",
                        !item.disabled &&
                          "hover:bg-slate-100 focus:bg-slate-100 focus:outline-none",
                        value === item.value &&
                          !item.disabled &&
                          "rounded-md bg-slate-100"
                      )}
                      role="option"
                      aria-selected={value === item.value}
                    >
                      <div className="flex h-4 w-4 items-center justify-center">
                        {value === item.value && !item.disabled && (
                          <Check className="h-4 w-4 text-slate-600" />
                        )}
                      </div>
                      <span className="flex-1 truncate">{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Divider */}
                {groupIndex < foodOptions.length - 1 && (
                  <div className="h-px w-full bg-slate-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
