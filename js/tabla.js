function crear() {
    var id_filas = document.getElementById("id_filas").value;
    var id_columnas = document.getElementById("id_columnas").value;
    var tabla = id_filas * id_columnas;

    document.write("<table border = '2'>");
    for (var i = 0; i < id_filas; i++) {
        document.write("<tr>")
        for (var j = 0; j < id_columnas; j++) {
            document.write("<td>");
            document.write("hola");
            tabla--;
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}