import { useEffect, useState } from "react";
import styles from './CalculadoraIMC.module.css';

function CalculadoraIMC() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState('')
    

    

    useEffect(() => {
        const alturaAoQuadrado = altura * altura;
        setResultado(parseFloat(peso / alturaAoQuadrado).toFixed(2))

        if (resultado < 17) {
            setClassificacao('MUITO ABAIXO DO PESO')
        } else if (resultado < 18.50) {
            setClassificacao('ABAIXO DO PESO')
        } else if (resultado < 25){
            setClassificacao('PESO NORMAL')
        } else if (resultado < 30) {
            setClassificacao('ACIMA DO PESO')
        } else if (resultado < 35) {
            setClassificacao('OBESIDADE I')
        } else if ( resultado < 40) {
            setClassificacao('OBESIDADE II (SEVERA)')
        } else if (resultado >= 40){
            setClassificacao('OBESIDADE III (MÓRBIDA)')
        };
    }, [altura, peso, resultado])


    return (
        <div className="container">
            <div className={styles.container}>
                <h1 className={styles.titulo}>CALCULADORA IMC</h1>
                <form className={styles.form}>
                    <input className={styles.input}  type="number" placeholder="Digite sua altura(m)" onChange={(evento) => {setAltura(evento.target.value)}}/>
                    <input className={styles.input} type="number" placeholder="Digite seu peso(kg)" onChange={(evento) => {setPeso(evento.target.value)}} />
                </form>
                <h2>Resultado:</h2>
                {(resultado > 0) ? (
                    <div className={styles.resultados}>
                        <span className={styles.span}>{resultado}</span>
                        <span className={styles.span}>{classificacao}</span>
                    </div>
                ) : (
                    <span className={styles.span}>Aguardando dados válidos...</span>
                ) }
                
            </div>
        </div>
    )
}

export default CalculadoraIMC;