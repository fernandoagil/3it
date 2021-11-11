import  { Indicator } from './indicator';

export interface IndicatorsResponse {
    "version": string,
    "autor": string,
    "fecha": string,
    "uf": Indicator,
    "ivp": Indicator,
    "dolar": Indicator,
    "dolar_intercambio": Indicator,
    "euro": Indicator,
    "ipc": Indicator,
    "utm": Indicator,
    "imacec": Indicator,
    "tpm": Indicator,
    "libra_cobre": Indicator,
    "tasa_desempleo": Indicator,
    "bitcoin": Indicator
}