import type { State } from "../../types/State";

export enum NotificationType {
  RENT_REQUEST = "RENT_REQUEST",
  RENT_APPROVED = "RENT_APPROVED",
  RENT_REJECTED = "RENT_REJECTED",
  RENT_RETURN = "RENT_RETURN",
  RENT_RETURN_CONFIRMED = "RENT_RETURN_CONFIRMED",
  TOOL_REVIEW = "TOOL_REVIEW",
  USER_REVIEW = "USER_REVIEW",
}

export interface Notification {
  _id: string;
  title: string;
  message: string;
  receiver: string;
  type: NotificationType;
  related: string;
  isRead: boolean;
  isSeen: boolean;
  createdAt: string;
  sender?: Sender;
}

export interface Sender {
  _id: string;
  fullName: string;
  picture?: string;
  createdAt?: string;
}

export interface NotificationState extends State {
  notifications: Notification[];
  notification: Notification | null;
  unReadNotificationCount: number;
}
