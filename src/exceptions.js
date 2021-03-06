function MissingSessionIdException () {
    this.message = "Session Id is missing! Run login() method befor or pass sessionId as argument.";
    this.name = "MissingSessionIdException";
}

function MissingApiUrlException () {
    this.message = "API Url not specified!";
    this.name = "MissingApiUrlException";
}

function MissingApiHostException () {
    this.message = "API Host have to be specified. pass header object with 'Host' property to constructor";
    this.name = "MissingApiHostException";
}

function MissingArgumentException (argument) {
    this.message = "Argument " + argument + " required";
    this.name = "MissingArgumentException";
}

function MagentoFaultException (faultCode, faultString) {
    this.message = "Magento returns error. Faultcode: " + faultCode + ", faultstring: " + faultString;
    this.name = "MagentoFaultException";
}

function MissingMandatoryArgumentException (argument, method) {
    this.message = "Missing mandatory [" + argument + "] argument in [" + method + "] method!";
    this.name = "MissingMandatoryArgumentException";
}

function MyRandomException () {
    this.message = "This is my random exception.";
    this.name = "MyRandomException";
}

module.exports = {
    MissingSessionIdException: MissingSessionIdException,
    MissingApiUrlException: MissingApiUrlException,
    MissingApiHostException: MissingApiHostException,
    MissingArgumentException: MissingArgumentException,
    MagentoFaultException: MagentoFaultException,
    MissingMandatoryArgumentException: MissingMandatoryArgumentException,
    MyRandomException: MyRandomException,
};