const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 500,
    backgroundColor: "#232323",
    width: "50%",
    border: "1px solid #ccc",
    boxShadow: "1px 1px 1px black",
    padding: "16px",
    left: "25%",
    top: " 10%",
    boxSizing: " border-box",
    transition: "all 0.3s ease-out",
  },
  title: {
    color:'#FFFFFF',
    fontSize:30,
    textAlign:'left',
    marginLeft:'3rem'
  },
  　closeIcon: {
    width:'1rem',
    height:'1rem'
  },
  buttonContainer:{
    marginTop: '1rem',
    marginLeft:'15rem'
  },
  leftButton:{
    backgroundColor:'#232323',
    height:'2rem',
    weight:'4rem',
    color:'#F65261',
    border: "1px solid #F65261",
    borderRadius:'10%',
    marginRight:'1rem',
  },
  rightButton:{
    backgroundColor:'#F65261',
    height:'2rem',
    weight:'4rem',
    border: "none",
    borderRadius:'10%',
    color:'#FFFFFF',
    height:'2rem',
    weight:'4rem'
  },
  closeIconContainer: {
    height:'2rem',
    width:'2rem',
    marginLeft:'35rem',
    marginTop:'-2rem'
  },
  closeImg: {
    flexShrink: 0,
  }
};
export default styles;