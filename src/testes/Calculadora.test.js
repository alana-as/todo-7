const Calculadora = require("../model/Calculadora");

describe("Testar operacoes da model", () => {
    test("testando metodo de soma", async()=>{
        const soma = await Calculadora.soma(2, 3)
        expect(soma).toEqual(5)
    })
    test("testando metodo de soma com erro", async()=>{
        try{
            const soma = await Calculadora.soma(2, "a")
        } 
        catch (erro)
        {
            expect(erro).toBeTruthy()
        }
    })

    test("testando metodo de subtracao", async()=>{
        const subtracao = await Calculadora.subtracao(5, 3)
        expect(subtracao).toEqual(2)
    })
    test("testando metodo de subtracao com erro", async()=>{
        try{
            const subtracao = await Calculadora.subtracao(5, "a")
        } 
        catch (erro)
        {
            expect(erro).toBeTruthy()
        }
    })

    test("testando metodo de multiplicacao", async()=>{
        const multiplicacao = await Calculadora.multiplicacao(3, 3)
        expect(multiplicacao).toEqual(9)
    })
    test("testando metodo de multiplicacao com erro", async()=>{
        try{
            const multiplicacao = await Calculadora.multiplicacao(3, "a")
        } 
        catch (erro)
        {
            expect(erro).toBeTruthy()
        }
    })

    test("testando metodo de divisao", async()=>{
        const divisao = await Calculadora.divisao(30, 3)
        expect(divisao).toEqual(10)
    })
    test("testando metodo de divisao com erro", async()=>{
        try{
            const divisao = await Calculadora.divisao(30, "a")
        } 
        catch (erro)
        {
            expect(erro).toBeTruthy()
        }
    })
    
});