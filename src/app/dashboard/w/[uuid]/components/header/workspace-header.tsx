"use client"

import { SendInvitationModal } from "@/components/workspaces/send-invitation/send-invitation-modal";
import { Workspace } from "@/types/workspace-types";
import styles from "./styles";

export function WorkspaceHeader({ workspace }: { workspace: Workspace }) {

  return (
    <div className={styles.root}>
      <h3>{workspace?.name}</h3>
      <SendInvitationModal workspace={workspace} />
    </div>
  )
}