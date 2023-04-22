import {methods} from '@/api/axios-en9door'

const baseUrl = `owner/board`

const apiBoard = {
  putBoard(row) {
    return methods.put(`${baseUrl}/${row.boardId}`, row)
  },
  saveBoard(board) {
    return methods.post(baseUrl, board)
  },
  deleteBoard(boardId) {
    return methods.delete(`${baseUrl}/${boardId}`)
  }
}

export default apiBoard
