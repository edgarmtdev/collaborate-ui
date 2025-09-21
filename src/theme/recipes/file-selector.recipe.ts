import { defineRecipe, defineSlotRecipe } from '@pandacss/dev'

export const fileSelector = defineSlotRecipe({
  slots: ['root', 'dragContainer', 'thumbnailList', 'thumbnail', 'fileName'],
  className: 'file-selector',
  description: 'Styles for File Selector component',
  base: {
    root: {
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
    },
    dragContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: '#6B7280'
    },
    thumbnailList: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    },
    thumbnail: {
      width: 200,
      height: 120,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#F3F4F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    fileName: {
      fontSize: 14,
      color: '#6B7280'
    }
  }
})
