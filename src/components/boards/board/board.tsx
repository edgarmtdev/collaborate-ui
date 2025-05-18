import { BoardType } from "@/types/board-types";
import { css } from "~root/styled-system/css";

export function Board({ board }: { board: BoardType }) {
  console.log("🚀 ~ Board ~ board:", board)
  return (
    <div className={css({ backgroundColor: "white", width: 272, maxH: "100%", borderRadius: 10, boxShadow: "md" })}>
      <section className={css({ backgroundColor: "primary.700/90", blur: 10, p: 14, borderTopLeftRadius: 10, borderTopRightRadius: 8, color: "white" })}>
        <h2 className={css({ fontWeight: "semibold", fontSize: "lg" })}>{board.name}</h2>
      </section>
      <section className={css({ p: 14 })}>
        <p className="text-sm text-gray-500">Created at: {new Date(board.createdAt).toLocaleDateString()}</p>
      </section>
    </div>
  )
}