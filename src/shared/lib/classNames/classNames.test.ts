import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('class-test')).toBe('class-test')
  })

  test('with additional class', () => {
    expect(classNames('class-test', {}, ['bar', 'baz']))
      .toBe('class-test bar baz')
  })

  test('with mods class hovered, selected', () => {
    expect(classNames('class-test', { hovered: true, selected: true }, []))
      .toBe('class-test hovered selected')
  })

  test('with mods class hovered', () => {
    expect(classNames('class-test', { hovered: true, selected: false }, []))
      .toBe('class-test hovered')
  })

  test('with mods and additional', () => {
    const expected = 'class-test bar baz hovered'
    expect(classNames('class-test', { hovered: true, selected: false }, ['bar', 'baz']))
      .toBe(expected)
  })

  test('with undefined', () => {
    const expected = 'class-test selected'
    expect(classNames('class-test', { hovered: undefined, selected: true }, []))
      .toBe(expected)
  })
})
