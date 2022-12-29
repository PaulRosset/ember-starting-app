import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ListsNewController extends Controller {
  @action
  onChangeTodoTitle(e) {
    this.model.title = e.target.value;
  }

  @action
  onChangeTodoCompleted(e) {
    this.model.completed = !this.model.completed;
    console.warn(this.model.completed);
  }

  @action
  onSubmitTodo(e) {
    e.preventDefault();

    console.warn(e);
    this.model.save();
  }
}
