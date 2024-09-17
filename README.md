# SearchContractsSecopii

Este proyecto es un servicio para la búsqueda de contratos en Secopii utilizando Spring Boot.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

1. **Java 21** - Este proyecto requiere la versión 21 de Java. Puedes verificar tu versión de Java instalada ejecutando:

   ```bash
   java -version
   ```
Si no tienes Java 21 instalado, puedes descargarlo desde el sitio oficial de [Oracle](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html) o usar [Adoptium](https://adoptium.net/es/) para gestionarlo.

2. **Maven** - Este proyecto usa Maven para la construcción y gestión de dependencias. Si no tienes Maven instalado, sigue las instrucciones en el sitio oficial de [Apache Maven](https://maven.apache.org/install.html).

Para verificar que Maven está instalado correctamente, ejecuta:
```bash
mvn -version
 ```

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local
2. Asegúrate de que las dependencias estén correctamente descargadas y configuradas ejecutando el siguiente comando:
   ```bash
    mvn clean install
   ```
## Configuración de base de datos
1. Es necesario contar con postgresql de manera local.
2. La base de datos del proyecto debe llamarse searchcontracts.
3. El usuario de la db debe ser ***postgres***
4. La contraseña de la db debe ser ***1106***

### Ejecución del proyecto
Para ejecutar la aplicación localmente, usa el siguiente comando de Maven en el directorio del proyecto.
```bash
mvn spring-boot:run
 ```
