'use client'

import { CloudUpIcon } from '@/icons/cloud-up'
import Image from 'next/image'
import { forwardRef, HTMLAttributes, RefObject, useRef, useState } from 'react'
import { fileSelector } from '~root/styled-system/recipes'
import { Icon } from '../icon'

import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { RecipeVariantProps } from '~root/styled-system/types'

export type RecipeFileSelectorProps = RecipeVariantProps<typeof fileSelector>;

export type FileSelectorProps = RecipeFileSelectorProps
  & HTMLAttributes<HTMLDivElement>
  & { name?: string; value?: string; onChangeFile?: (file: File | null) => void };

export const FileSelector = forwardRef<
  HTMLDivElement,
  FileSelectorProps
>((
  { className, name, value, onChangeFile, ...props },
  ref
) => {
  const fileSelectorClasses = fileSelector({ ...props })

  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('No selected file')
  const [preview, setPreview] = useState<string | StaticImport>()
  return (
    <div>
      <div
        ref={ref}
        onClick={() => { inputRef && (inputRef as RefObject<HTMLInputElement>).current?.click() }}
        className={fileSelectorClasses.root}
      >
        <input
          ref={inputRef}
          type='file'
          accept='image/*'
          hidden
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null
            if (file) {
              setFileName(file.name)
              setPreview(URL.createObjectURL(file))
              onChangeFile?.(file)
            }
          }}
        />
        <section className={fileSelectorClasses.dragContainer}>
          <Icon icon={CloudUpIcon} size='lg' />
          <h4>Click to upload</h4>
        </section>
      </div>
      <div className={fileSelectorClasses.thumbnailList}>
        {preview &&
          <figure className={fileSelectorClasses.thumbnail}>
            <Image src={preview} alt={fileName} fill objectFit='cover' />
          </figure>
        }
        <div className={fileSelectorClasses.fileName}>{fileName}</div>
      </div>
    </div>
  )
})
