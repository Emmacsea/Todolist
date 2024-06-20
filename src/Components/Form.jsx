import style from "./Form.module.css";

export default function Form({  onSubmitForm }) {
  return (
    <div className={style.container}>
    
      <div>
      <h2>todo</h2>
        <div className={style.todo}>
          <div className={style.create}>
            <input type="radio" />
            <label htmlFor="">Create a new todo...</label>
          </div>

          <div className={style.tasklist}>
            <div className={style.listtask}>
              <input type="radio" />
              <label htmlFor=""> Complete online javaScript course</label>
            </div>

            <div className={style.line}></div>

            <div className={style.listtask}>
              <input type="radio" />
              <label htmlFor=""> Complete online Jog around the park 3x</label>
            </div>

            <div className={style.line}></div>

            <div className={style.listtask}>
              <input type="radio" />
              <label htmlFor=""> 10 minutes mediation</label>
            </div>

            <div className={style.line}></div>

            <div className={style.listtask}>
              <input type="radio" />
              <label htmlFor=""> Read for 1 hour</label>
            </div>

            <div className={style.line}></div>

            <div className={style.listtask}>
              <input type="radio" />
              <label htmlFor=""> Pick up groceries</label>
            </div>

           
          </div>
          </div>
      </div>
    </div>
  );
}
