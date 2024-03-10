// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProductTracking {

    struct Product {
        string name;
        uint stepsRequired;
        uint stepsCompleted;
        mapping(uint => bool) stepCompleted;
        mapping(uint => address) stepWhitelist;
    }

    // Mapeo de cada producto a su dueño
    mapping(uint => address) public productOwner;
    // Mapeo de cada producto a su estructura de datos
    mapping(uint => Product) public products;
    // Contador de productos
    uint public productCount;
    // Nombre del negocio
    string public name;
    // Sector del negocio
    string public sector;
    // Localidad
    string public locality;
    // Descripción
    string public description;

    // Eventos para emitir cuando un producto es creado y cuando un paso es completado
    event ProductCreated(uint productId, string name, uint stepsRequired);
    event StepCompleted(uint productId, uint step);

    // Modificador para verificar si el llamante es el dueño del producto
    modifier onlyOwner(uint _productId) {
        require(msg.sender == productOwner[_productId], "Caller is not the product owner");
        _;
    }

    // Modificador para verificar si el llamante está autorizado para completar un paso específico
    modifier onlyAuthorized(uint _productId, uint _step) {
        require(products[_productId].stepWhitelist[_step] == msg.sender, "Caller is not authorized for this step");
        _;
    }

    constructor(string memory _name, string memory _sector, string memory _locality, string memory _description){
        name = _name;
        sector = _sector;
        locality = _locality;
        description = _description;
    }


    // Función para crear un nuevo producto
    function createProduct(string memory _name, uint _stepsRequired) public {
        require(_stepsRequired > 0, "Steps required must be greater than 0");
        uint productId = productCount++;
        Product storage newProduct = products[productId];
        newProduct.name = _name;
        newProduct.stepsRequired = _stepsRequired;
        productOwner[productId] = msg.sender;
        emit ProductCreated(productId, _name, _stepsRequired);
    }

    // Función para autorizar una wallet para completar un paso específico de un producto
    function authorizeStep(uint _productId, uint _step, address _wallet) public onlyOwner(_productId) {
        require(_step > 0 && _step <= products[_productId].stepsRequired, "Invalid step");
        products[_productId].stepWhitelist[_step] = _wallet;
    }

    // Función para marcar un paso como completado
    function completeStep(uint _productId, uint _step) public onlyAuthorized(_productId, _step) {
        require(_step > 0 && _step <= products[_productId].stepsRequired, "Invalid step");
        require(!products[_productId].stepCompleted[_step], "Step already completed");
        products[_productId].stepCompleted[_step] = true;
        products[_productId].stepsCompleted++;
        emit StepCompleted(_productId, _step);
    }

    // Función para verificar si todos los pasos de un producto están completos
    function isProductComplete(uint _productId) public view returns (bool) {
        return products[_productId].stepsRequired == products[_productId].stepsCompleted;
    }
}

