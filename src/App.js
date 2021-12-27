import React, {Component} from 'react';
import styles from './AppStyles.module.css';
import Body from './Components/Body';
import GoBack from './Components/GoBackButton';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department : "",
      rating: "",
      items: [],
      isFormSubmitted: false
    }
  }
  getValue = (event) => {
    this.setState(  { [event.target.name]: event.target.value }  )
  }
  showValue = (event) => {
        event.preventDefault();
        const tempObj = {
            name : this.state.name,
            department : this.state.department,
            rating : this.state.rating
        }

        const tempArr = this.state.items;
        tempArr.push(tempObj)

        this.setState(
            {
                name: "",
                department:"",
                rating: "",
                items: [...tempArr]
            }
        )

        this.setState(  {  isFormSubmitted: true  }  )

  }

  goBack = () => {
      this.setState(  {  isFormSubmitted: false  }  )
  }

  render() {
console.log(this.state.items);
let feedBackForm;
let goBackBtn;
let displayFeedBack;
let dynamicHeaderText;

if(!this.state.isFormSubmitted) {
        feedBackForm = <form>
                            <label className={styles.inputLabel}>Name:</label>
                            <input className={styles.inputField} type="text" name="name" value={this.state.name} onChange={ this.getValue } />
                            <br/>
                            <label className={styles.inputLabel}>Department:</label>
                            <input className={styles.inputField} type="text" name="department" value={this.state.department} onChange={ this.getValue } />
                            <br/>
                            <label className={styles.inputLabel}>Rating:</label>
                            <input className={styles.inputField} type="number" name="rating" value={this.state.rating}  onChange={  this.getValue }/>
                            <br/>
                            <button className={styles.submitBtn} onClick={ this.showValue }>Submit</button>
                        </form>;
        goBackBtn  =  null;
        displayFeedBack  =  null;
        dynamicHeaderText = "FORM";
    
}
else {
    feedBackForm = null;
    goBackBtn = <GoBack><button className={styles.submitBtn} onClick={  this.goBack  }>Go Back</button></GoBack>;
    displayFeedBack  =  <div className={styles.displayBox}>
                            {   this.state.items.map((value, index)=>{
                                return(
                                    <Body  name={value.name} dept={value.department} rating={value.rating} />
                                )
                            })  
                            }
                        </div>;
    dynamicHeaderText = "DATA";
}

    return(
      <div>
            <Header name={  dynamicHeaderText  }/>

            <div className={styles.formBox}>
                {  feedBackForm  }
            </div>

            {  displayFeedBack  }


            {  goBackBtn  }

      </div>
    )
  }
}

export default App;






////////
// doubt:
// { [event.target.name]: event.target.value }
