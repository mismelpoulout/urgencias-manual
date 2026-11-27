import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ECG_CLINICAL } from '../src/content/ecgClinical.js'
import { ECG_GUIDE } from '../src/content/ecgGuide.js'
import { DURATION, RHYTHMS, events, rates, segment } from '../src/lib/ecg.js'
import { sectionIds } from './sections.js'

const intervals = (type, to) => {
  const beats = events(type, 0, to).filter((e) => e.kind === 'qrs')
  return beats.slice(1).map((e, i) => Number((e.t - beats[i].t).toFixed(2)))
}

test('cada ritmo tiene guía', () => {
  assert.deepEqual(Object.keys(ECG_GUIDE).sort(), Object.keys(RHYTHMS).sort())
})

test('cada ritmo tiene patologías, síntomas, signos y accesos válidos', () => {
  assert.deepEqual(Object.keys(ECG_CLINICAL).sort(), Object.keys(RHYTHMS).sort())
  for (const [type, data] of Object.entries(ECG_CLINICAL)) {
    for (const key of ['conditions', 'symptoms', 'signs', 'links']) assert.ok(data[key].length, `${type}: ${key}`)
    for (const id of data.links) assert.ok(sectionIds.has(id), `${type} → ${id}`)
  }
})

test('el trazado animado continúa sin saltos entre ventanas', () => {
  for (const type of Object.keys(RHYTHMS)) {
    const end = segment(type, 0).at(-1)[1]
    const start = segment(type, DURATION)[0][1]
    assert.ok(Math.abs(end - start) < 0.001, type)
  }
})

test('intervalos R-R de cada bloqueo', () => {
  assert.deepEqual(intervals('sinus', 4), [0.8, 0.8, 0.8, 0.8])
  assert.deepEqual(intervals('mobitz1', 7), [0.87, 0.85, 1.4, 0.87, 0.85, 1.4])
  assert.deepEqual(intervals('mobitz2', 5), [0.72, 1.44, 0.72, 1.44])
  assert.deepEqual(intervals('bav3', 6), [1.5, 1.5, 1.5])
})

test('frecuencias y alarma', () => {
  assert.deepEqual(rates('bav3'), { ventricular: 40, atrial: 88 })
  assert.equal(rates('flutter').ventricular, 150)
  assert.ok(events('fv', 0, 5).every((e) => e.kind === 'alarm'))
})
