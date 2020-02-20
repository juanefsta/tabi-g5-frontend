export class ApplicationConstants {
    // API
    public static API_ENDPOINT = 'http://localhost:8080/';

    // Comisarías
    public static GET_COMISARIAS = 'api/comisarias/';

    // Centros
    public static GET_CENTROS = 'api/centros/';

    // Municipios    
    public static GET_CANTSINCENTRO = 'api/municipios/cantSinCentro/'
    public static GET_CANTCONCENTRO = 'api/municipios/cantConCentro/'
    public static GET_MUNICIPIOBYNAME = 'api/municipios/:nombre'
    public static GET_MUNICIPIOS = 'api/municipios/';
    public static GET_MUNICIPIOSSINCENTROATENCION = 'api/municipios/sinCentroAtencion/'

    // Lineas
    public static GET_LLAMADASPORMUNICIPIO = 'api/linea/municipios/';

}