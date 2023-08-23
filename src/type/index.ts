
export interface typeData {
    id: number
    label: string
    level: number
    children?: typeData[]
}

export interface listMenuProps {
    anchorEl: null | HTMLElement
    open: boolean
    handleClose: () => void
    setSelectedItems: any, 
    selectedItems: typeData[]
}

