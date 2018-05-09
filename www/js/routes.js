angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('ethiopianConstractionDirectories', {
    url: '/page2',
    templateUrl: 'templates/ethiopianConstractionDirectories.html',
    controller: 'ethiopianConstractionDirectoriesCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('categoryINDEX', {
    url: '/page5',
    templateUrl: 'templates/categoryINDEX.html',
    controller: 'categoryINDEXCtrl'
  })

  .state('about', {
    url: '/page6',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('contact', {
    url: '/page7',
    templateUrl: 'templates/contact.html',
    controller: 'contactCtrl'
  })
//////////////////////////////////////////////////////////////////
.state('bank', {
  url: '/page8',
  templateUrl: 'templates/service/bank.html',
  controller: 'bank'
})

///////////////////////////////////////////////////////////////////
.state('Aluminum', {
  url: '/page8',
  templateUrl: 'templates/service/aluminum.html',
  controller: 'ALUMINUM'
})
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////
.state('bitumen', {
  url: '/page8',
  templateUrl: 'templates/service/bitumen.html',
  controller: 'bitumen'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('brickproduction', {
  url: '/page8',
  templateUrl: 'templates/service/brickproduction.html',
  controller: 'brickproduction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('carimporter', {
  url: '/page8',
  templateUrl: 'templates/service/carimporter.html',
  controller: 'carimporter'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('cementproduction', {
  url: '/page8',
  templateUrl: 'templates/service/cementproduction.html',
  controller: 'cementproduction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Ceramic', {
  url: '/page8',
  templateUrl: 'templates/service/Ceramic.html',
  controller: 'Ceramic'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ChipWood', {
  url: '/page8',
  templateUrl: 'templates/service/ChipWood.html',
  controller: 'ChipWood'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Cleaning', {
  url: '/page8',
  templateUrl: 'templates/service/Cleaning.html',
  controller: 'Cleaning'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('communicationservice', {
  url: '/page8',
  templateUrl: 'templates/service/communicationservice.html',
  controller: 'communicationservice'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('construction', {
  url: '/page8',
  templateUrl: 'templates/service/construction.html',
  controller: 'construction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ConstructionMachinery', {
  url: '/page8',
  templateUrl: 'templates/service/ConstructionMachinery.html',
  controller: 'ConstructionMachinery'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ConstructionMaterial', {
  url: '/page8',
  templateUrl: 'templates/service/ConstructionMaterial.html',
  controller: 'ConstructionMaterial'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Consultancy', {
  url: '/page8',
  templateUrl: 'templates/service/Consultancy.html',
  controller: 'Consultancy'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('conveconstructionTrainingCenterrtcsv', {
  url: '/page8',
  templateUrl: 'templates/service/conveconstructionTrainingCenterrtcsv.html',
  controller: 'conveconstructionTrainingCenterrtcsv'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('door', {
  url: '/page8',
  templateUrl: 'templates/service/door.html',
  controller: 'door'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ElectricMaterialImporter', {
  url: '/page8',
  templateUrl: 'templates/service/ElectricMaterialImporter.html',
  controller: 'ElectricMaterialImporter'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ElectroMechanicalWork', {
  url: '/page8',
  templateUrl: 'templates/service/ElectroMechanicalWork.html',
  controller: 'ElectroMechanicalWork'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('fiberglasswork', {
  url: '/page8',
  templateUrl: 'templates/service/fiberglasswork.html',
  controller: 'fiberglasswork'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('FinishingWork', {
  url: '/page8',
  templateUrl: 'templates/service/FinishingWork.html',
  controller: 'FinishingWork'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('FloorWall', {
  url: '/page8',
  templateUrl: 'templates/service/FloorWall.html',
  controller: 'FloorWall'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Furniture', {
  url: '/page8',
  templateUrl: 'templates/service/Furniture.html',
  controller: 'Furniture'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Generator', {
  url: '/page8',
  templateUrl: 'templates/service/Generator.html',
  controller: 'Generator'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('GlassWork', {
  url: '/page8',
  templateUrl: 'templates/service/GlassWork.html',
  controller: 'GlassWork'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('GypsumDécor', {
  url: '/page8',
  templateUrl: 'templates/service/GypsumDécor.html',
  controller: 'GypsumDécor'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Hotel', {
  url: '/page8',
  templateUrl: 'templates/service/Hotel.html',
  controller: 'Hotel'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Installation', {
  url: '/page8',
  templateUrl: 'templates/service/Installation.html',
  controller: 'Installation'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Insurance', {
  url: '/page8',
  templateUrl: 'templates/service/Insurance.html',
  controller: 'Insurance'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('InteriorDesign', {
  url: '/page8',
  templateUrl: 'templates/service/InteriorDesign.html',
  controller: 'InteriorDesign'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('LiftImporter', {
  url: '/page8',
  templateUrl: 'templates/service/LiftImporter.html',
  controller: 'LiftImporter'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('MarbleGraniteProduction', {
  url: '/page8',
  templateUrl: 'templates/service/MarbleGraniteProduction.html',
  controller: 'MarbleGraniteProduction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('MetalWork', {
  url: '/page8',
  templateUrl: 'templates/service/MetalWork.html',
  controller: 'MetalWork'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('NailProduction', {
  url: '/page8',
  templateUrl: 'templates/service/NailProduction.html',
  controller: 'NailProduction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('oilPetroleum', {
  url: '/page8',
  templateUrl: 'templates/service/oilPetroleum.html',
  controller: 'oilPetroleum'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Partition', {
  url: '/page8',
  templateUrl: 'templates/service/Partition.html',
  controller: 'Partition'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('PipeFitting', {
  url: '/page8',
  templateUrl: 'templates/service/PipeFitting.html',
  controller: 'PipeFitting'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('PlasticMaterial', {
  url: '/page8',
  templateUrl: 'templates/service/PlasticMaterial.html',
  controller: 'PlasticMaterial'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('PVCCeiling', {
  url: '/page8',
  templateUrl: 'templates/service/PVCCeiling.html',
  controller: 'PVCCeiling'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('QuartzPaint', {
  url: '/page8',
  templateUrl: 'templates/service/QuartzPaint.html',
  controller: 'QuartzPaint'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('RealEstate', {
  url: '/page8',
  templateUrl: 'templates/service/RealEstate.html',
  controller: 'RealEstate'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('ReinforcementBar', {
  url: '/page8',
  templateUrl: 'templates/service/ReinforcementBar.html',
  controller: 'ReinforcementBar'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('RoofTiles', {
  url: '/page8',
  templateUrl: 'templates/service/RoofTiles.html',
  controller: 'RoofTiles'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('SafetyEquipments', {
  url: '/page8',
  templateUrl: 'templates/service/SafetyEquipments.html',
  controller: 'SafetyEquipments'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('SandGravel', {
  url: '/page8',
  templateUrl: 'templates/service/SandGravel.html',
  controller: 'SandGravel'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Scaffolding', {
  url: '/page8',
  templateUrl: 'templates/service/Scaffolding.html',
  controller: 'Scaffolding'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('SoilTestRelatedWorks', {
  url: '/page8',
  templateUrl: 'templates/service/SoilTestRelatedWorks.html',
  controller: 'SoilTestRelatedWorks'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('SparePart', {
  url: '/page8',
  templateUrl: 'templates/service/SparePart.html',
  controller: 'SparePart'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('StoneArt', {
  url: '/page8',
  templateUrl: 'templates/service/StoneArt.html',
  controller: 'StoneArt'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('TimberImporter', {
  url: '/page8',
  templateUrl: 'templates/service/TimberImporter.html',
  controller: 'TimberImporter'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('TourTravel', {
  url: '/page8',
  templateUrl: 'templates/service/TourTravel.html',
  controller: 'TourTravel'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Transport', {
  url: '/page8',
  templateUrl: 'templates/service/Transport.html',
  controller: 'Transport'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('Tyre', {
  url: '/page8',
  templateUrl: 'templates/service/Tyre.html',
  controller: 'Tyre'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('WaterProofing', {
  url: '/page8',
  templateUrl: 'templates/service/WaterProofing.html',
  controller: 'WaterProofing'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('WaterPump', {
  url: '/page8',
  templateUrl: 'templates/service/WaterPump.html',
  controller: 'WaterPump'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('WireProduction', {
  url: '/page8',
  templateUrl: 'templates/service/WireProduction.html',
  controller: 'WireProduction'
})
///////////////////////////////////////////
////////////////////////////////////////////
.state('WoodWork', {
  url: '/page8',
  templateUrl: 'templates/service/WoodWork.html',
  controller: 'WoodWork'
})
///////////////////////////////////////////

////////////////////////////////////////////
.state('WaterWellDrilling', {
  url: '/page8',
  templateUrl: 'templates/service/WaterWellDrilling.html',
  controller: 'WaterWellDrilling'
})
///////////////////////////////////////////

 .state('productPage', {
      url: '/page13',
      templateUrl: 'templates/productPage.html',
      controller: 'productPageCtrl'
    })
        

//////////////////////////////////////////////////////////////////
$urlRouterProvider.otherwise('/page2')


});