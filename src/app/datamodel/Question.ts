export class Question{
    question: String;
    answer : String;

    public build(question : String, answer : String){
        this.question = question;
        this.answer = answer;
        return this;
    }
}