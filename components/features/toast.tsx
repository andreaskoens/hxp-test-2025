"use client";

import { toast } from "sonner";

export const showToast = ({
  message,
  variant = "default",
  action,
}: {
  message: string;
  variant?: "default" | "success" | "error" | "warning";
  action?: {
    label: string;
    onClick: () => void;
  };
}) => {
  const options = {
    ...(action && {
      action: {
        label: action.label,
        onClick: action.onClick,
      },
    }),
  };

  switch (variant) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};
