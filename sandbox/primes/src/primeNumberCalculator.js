function calculatePrimeNumbersTo(maxNumber) {

    function theCollectionWithPrimeAdded(aCollection, aPrimeNumber) {
        aCollection.push(aPrimeNumber)
        return aCollection
    }

    function addToCollectionIfPrime(aPotentialPrimeNumber, aCollectionOfPrimeNumbers) {

        for (var indexOfPrimeNumber in aCollectionOfPrimeNumbers) {
            if (aPotentialPrimeNumber % aCollectionOfPrimeNumbers[indexOfPrimeNumber] == 0) {
                return aCollectionOfPrimeNumbers
            }
        }
        return theCollectionWithPrimeAdded(aCollectionOfPrimeNumbers, aPotentialPrimeNumber);
    }

    function calculatePrimeNumbersFromTo(lowerNumber, maxNumber, primeNumbers) {
        if (lowerNumber == maxNumber) {
            return primeNumbers
        }
        return calculatePrimeNumbersFromTo(lowerNumber + 1, maxNumber, addToCollectionIfPrime(lowerNumber, primeNumbers))
    }

    return calculatePrimeNumbersFromTo(2, maxNumber, [])
}

exports.calculatePrimeNumbersTo = calculatePrimeNumbersTo