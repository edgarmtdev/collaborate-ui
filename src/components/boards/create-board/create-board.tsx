"use client";

import { createNewBoardAction } from "@/app/actions/boards";
import { Button, Input } from "@/components/ui";
import { useClickOutside } from "@/hooks";
import { useRef, useState } from "react";
import styles from "./create-board.styled";

interface CreateBoardProps {
  workSpaceUuid: string;
}

export function CreateBoard({ workSpaceUuid }: CreateBoardProps) {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useClickOutside(formRef, () => setShowForm(false), { enabled: true, detectEscapeKey: true });

  const handleCreateBoard = async () => {
    const response = await createNewBoardAction(new FormData(formRef.current!));
    console.log("Pruebas", response);
  }

  return (
    <div className={styles.createBoardContainer}>
      {!showForm ? (
        <button className={styles.addBoardButton} onClick={() => setShowForm(true)}>
          + Add new board
        </button>
      ) : (
        <form className={styles.formContainer} ref={formRef} action={handleCreateBoard}>
          <Input name="boardName" placeholder="Enter a board name..." size="sm" />
          <Input type="hidden" name="workSpaceUuid" value={workSpaceUuid} />
          <div className={styles.formButtonsContainer}>
            <Button type="submit" size="xs">Create</Button>
            <Button onClick={() => setShowForm(false)} size="xs" variant="dangerBorder">Cancel</Button>
          </div>
        </form>
      )}
    </div>
  )
}