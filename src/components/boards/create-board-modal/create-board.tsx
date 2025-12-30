"use client";

import { useState } from "react";
import styles from "./create-board.styled";

export function CreateBoard() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  }

  return (
    <div className={styles.createBoardContainer}>
      {!showForm ? (
        <button className={styles.addBoardButton} onClick={handleShowForm}>
          Add new board
        </button>
      ) : (
        <form>
          Create Board Form
        </form>
      )}
    </div>
  )
}