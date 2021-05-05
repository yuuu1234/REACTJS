const styles = {
    movieCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '20rem',
        position: 'relative'
    },
    movieImg: {
        flexShrink: 0,
        minWidth: '100%',
        minHeight: '80%',
    },
    movieDes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    movieName: {
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    movieType: {
        textAlign: 'left',
        fontSize: '15px',
        color: '#FFFFFF',
    },
    movieYear: {
        color: '#FFFFFF',
        fontSize: '20px',
        marginTop: '1rem',
        marginBottom: '1rem',
        border: ' 0.1rem solid white',
        borderRadius: '10%',
        height: '1.5rem',
    },
    roundButton: {
        position: 'absolute',
        borderRadius: '50%',
        backgroundColor: '#232323',
        opacity: 0.9,
        width: '40px',
        height: '40px',
        right: '10px',
        top: '10px',
    },

    movieEditor: {
        position: 'absolute',
        backgroundColor: '#424242',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        height: '70px',
        right: '10px',
        zIndex: 500
    },
    edit: {
        marginTop: '10px',
        marginBottom: '4px'
    },
    delete: {
        marginTop: '4px',
        marginBottom: '4px'
    },
    closeImg: {
        position:'absolute',
        height: '0.8rem',
        width: '0.8rem',
        marginLeft: '5rem',
        marginTop:'0.5rem',
        position:'absolute',
        flexShrink: 0,
    }
}
export default styles;