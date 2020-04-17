import Person from './Person'

class Girl extends Person {
  getAge () {
    return super.getAge() - 2
  }
}
export default Girl
