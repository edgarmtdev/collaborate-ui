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
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('No selected file')
  const [preview, setPreview] = useState<string | StaticImport>()
  return (
    <div>
      <div
        ref={ref}
        onClick={() => { inputRef && (inputRef as RefObject<HTMLInputElement>).current?.click() }}
        className={fileSelector({ ...props })}
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
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          color: '#6B7280'
        }}
        >
          <Icon icon={CloudUpIcon} size='lg' />
          <h4>Click to upload</h4>
        </section>
      </div>
      <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
        {preview &&
          <figure style={{
            width: 200,
            height: 120,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
          >
            <Image src={preview} alt={fileName} fill style={{ objectFit: 'cover' }} />
          </figure>
        }
        <div style={{ fontSize: 14, color: '#6B7280' }}>{fileName}</div>
      </div>
    </div>
  )
})
