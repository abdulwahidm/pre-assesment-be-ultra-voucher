const { groupAnagrams, areAnagrams } = require('./index'); 

test('areAnagrams should return true for anagram words', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
    expect(areAnagrams('read', 'dear')).toBe(true);
    expect(areAnagrams('elvis', 'lives')).toBe(true);
});

test('areAnagrams should return false for non-anagram words', () => {
    expect(areAnagrams('hello', 'world')).toBe(false);
    expect(areAnagrams('apple', 'banana')).toBe(false);
    expect(areAnagrams('open', 'close')).toBe(false);
});

test('groupAnagrams should correctly group anagram words', () => {
    const words = ['cook', 'save', 'taste', 'pam', 'aves', 'vase', 'state', 'map'];
    const expectedGroups = [
        ['cook'],
        ['save', 'aves', 'vase'],
        ['taste', 'state'],
        ['pam', 'map']
    ];

    expect(groupAnagrams(words)).toEqual(expectedGroups);
});

test('groupAnagrams should handle empty input', () => {
    expect(groupAnagrams([])).toEqual([]);
});

test('groupAnagrams should handle input with no anagrams', () => {
    const words = ['hello', 'world', 'apple', 'banana'];
    const expectedGroups = [
        ['hello'],
        ['world'],
        ['apple'],
        ['banana']
    ];

    expect(groupAnagrams(words)).toEqual(expectedGroups);
});
