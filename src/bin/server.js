import app from '../app';

app.set('port', process.env.PORT)

app.listen(app.get('port'), () => {
    console.log('Server run on port ',app.get('port'));
});