export interface Props {
  /** 弹窗可见性 */
  visible: boolean
  /**
  * 弹窗类型
  * add: 新增
  * edit: 编辑
  */
  type?: 'add' | 'edit'
  /** 编辑的表格行数据 */
  editData?: UserManagement.User | null
}

export type ModalType = NonNullable<Props['type']>
