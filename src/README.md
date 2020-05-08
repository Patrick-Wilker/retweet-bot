<p>Ainda falta criar o arquivo de configurações. Dei a ele o nome de config.js</p>

<p>Ele é simples,coloque o seguinte código no arquivo config.js (dentro do src) e, então, basta preencher dentro das aspas com as chaves e tokens da sua conta de desenvolvedor do twitter. </p>
<br>
let config = {<br>
    consumer_key: '',<br>
    consumer_secret: '',<br>
    access_token: '',<br>
    access_token_secret: ''<br>
};<br>
<br>
module.exports = config;<br>