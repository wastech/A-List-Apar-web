import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('author/addauthor', credentials)
  },
  login (credentials) {
    return Api().post('author/authors/signin', credentials)
  }
}