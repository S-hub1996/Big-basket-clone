import styled from "styled-components";


export const OffSection = styled.section`
.contouter{
    // border: 1px solid red;
    width:85%;
    margin: auto;
    margin-top: 35px;
    // display:none
}
.outer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.item {
    box-sizing: border-box;
    display: block;
    margin: 5px;
    color: #fff;
    text-align: center;
}
h2 {
    width: 85%;
    color: rgb(68, 68, 68);
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    padding: 40px 0 8px;
    margin: 5px auto 15px;
    border-bottom: 1px solid #eaeaea;
  }

.payment{
    // border: 1px solid red;
    width:85%;
    margin: auto;
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    img{
        width:285px;
        height:215px;
    }

}
.paymentin:hover{
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;  

}
.paymentin{
    border: 1px solid lightgrey;
}

.fiveelements{
    // border: 1px solid red;
    width:85%;
    margin: auto;
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.fivein{
    width:50%;
    border: 1px solid lightgrey;
    img{
        width:100%;
    }

}
.fivein1{
    width:50%;
    display: flex;
    flex-wrap: wrap;
    gap: 43px;
    justify-content: center;
    
}
.fiveelin{
    border: 1px solid lightgrey;
    img{
        width:100%;
    }
}
  
.sixelements{
    // border: 1px solid red;
    width:85%;
    margin: auto;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding:10px;
    img{
        width:178px;
        height:150px;
    }
}
.sixbox{
    border: 1px solid lightgrey;
}
.sixbox:hover{
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;  
    
}
`
