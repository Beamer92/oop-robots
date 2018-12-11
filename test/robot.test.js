const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', function() {
      const robotA = new Robot()
      const robotB = new Robot()
      expect(robotA.id).to.not.equal(robotB.id)
    })
    it('should allow for a description property to be set in the constructor', function() {
      let desc = 'SillyWillyDillyDilly'
      const robotA = new Robot(desc)
      expect(robotA.description).to.deep.equal(desc)
    })
    it('if the description is not set, it should be null', function(){
      const robotA = new Robot()
      expect(robotA.description).to.be.null
    })
  })

  describe('get id', function () {
    it('should return the id of the robot', function() {
      const robot = new Robot()
      expect(robot.id).to.be.ok

    })
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', function(){
      const robot = new Robot()
      const actual = () => robot.id = 1
      expect(actual).to.throw()
    })
  })

  describe('get description', function () {
    it('should return the description', function() {
      const robot = new Robot() 
      expect(robot.description).to.deep.equal(robot._description)
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', function() {
      const robot = new Robot()
      const actual = () => robot.description = ''
      expect(actual).to.throw()
    })
    it('should set the description of the robot', function() {
      const robot = new Robot()
      robot.description = 'lol'
      expect(robot._description).to.deep.equal('lol')
    })
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met', function() {
      const robot = new Robot()
      expect(robot.network).to.be.a('string')
    })
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network', function(){
      const robot = new Robot()
      const actual = () => robot.network = 'bloop, sploop'
      expect(actual).to.throw()

      const act2 = () => robot.network.push('lol')
      expect(act2).to.throw()

      const act3 = () => robot.network = ['bloop']
      expect(act3).to.throw()
    })
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot', function(){
      const rob = new Robot()
      const data = new Robot()
      const actual = () => rob.meet(data)
      expect(actual).to.be.ok
    })
    it('should throw an error if the inserted value is not a robot instance', function() {
      const rob = new Robot()
      const actual = () => rob.meet({id: 'Im Data'})
      expect(actual).to.throw()
    })
    it('should add the robots ids to each other\'s networks', function() {
      const rob = new Robot()
      const data = new Robot()
      const actual = () => {
        rob.meet(data)
        return rob.network}
      expect(actual()).to.equal(data.id)
      expect(data.network).to.equal(rob.id)
    })
  })
})
