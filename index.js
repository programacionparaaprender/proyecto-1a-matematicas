module.exports = {
    /**
     * suma = 1 + 2 = 3
     * @param {*} n1 Número uno de la suma
     * @param {*} n2 Número dos de la suma
     * @returns 
     */
    suma: function (n1, n2) {
        return this.esNumero(n1, n2)?(n1 + n2):this.mensajeError();
    },
    /**
     * resta = 2 - 1 = 2
     * @param {*} n1 Número uno
     * @param {*} n2 Número dos
     * @returns 
     */
    resta: function (n1, n2) {
        return this.esNumero(n1, n2)?(n1 - n2):this.mensajeError();
    },
    /**
     * multiplicación = 2 * 1 = 2
     * @param {*} n1 Número uno
     * @param {*} n2 Número dos
     * @returns 
     */
    multiplicacion: function (n1, n2) {
        return this.esNumero(n1, n2)?(n1 * n2):this.mensajeError();
    },
    /**
     * división = 2 / 1 = 2
     * @param {*} n1 Número uno
     * @param {*} n2 Número dos
     * @returns 
     */
    division: function (n1, n2) {
        return this.esNumero(n1, n2)?(n1 / n2):this.mensajeError();
    },
    /**
     * Mensaje de cuando los valores no son numéricos
     * @returns 
     */
    mensajeError: function () {
        console.log('Un valor o los dos valores no son numericos');
    },
    /**
     * Método comprueba si valores son numéricos
     * @param {*} n1 Número uno
     * @param {*} n2 Número dos
     * @returns 
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    }
}