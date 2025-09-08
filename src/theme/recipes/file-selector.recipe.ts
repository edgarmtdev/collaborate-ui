import { defineRecipe } from '@pandacss/dev'

export const fileSelector = defineRecipe({
  className: 'file-selector',
  description: 'Styles for File Selector component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '12px',
    border: '1px solid',
    borderColor: 'gray.300',
    borderRadius: '8px',
    borderStyle: 'dashed',
    backgroundColor: 'white',
    boxShadow: 'sm',
    minH: '150px',
    cursor: 'pointer',
    transition: 'all 100ms ease-in',
    w: '100%',
    '&:hover': {
      backgroundColor: 'coolGray.25'
    }
  }
})
