#! /usr/bin/env -S node --experimental-modules

/*
 ** Copyright (C) 2018-2019 Bloomberg LP. All rights reserved.
 ** This code is governed by the license found in the LICENSE file.
 */

import Demitasse from '@pipobscure/demitasse';
const { describe, it, report } = Demitasse;

import Pretty from '@pipobscure/demitasse-pretty';
const { reporter } = Pretty;

import { strict as assert } from 'assert';
const { equal } = assert;

import * as Temporal from 'proposal-temporal';

describe('Temporal.now', () => {
  describe('Structure', () => {
    it('Temporal.now is an object', () => equal(typeof Temporal.now, 'object'));
    it('Temporal.now has 5 properties', () => equal(Object.keys(Temporal.now).length, 5));
    it('Temporal.now.instant is a function', () => equal(typeof Temporal.now.instant, 'function'));
    it('Temporal.now.dateTime is a function', () => equal(typeof Temporal.now.dateTime, 'function'));
    it('Temporal.now.date is a function', () => equal(typeof Temporal.now.date, 'function'));
    it('Temporal.now.timeISO is a function', () => equal(typeof Temporal.now.timeISO, 'function'));
    it('Temporal.now.timeZone is a function', () => equal(typeof Temporal.now.timeZone, 'function'));
  });
  describe('Temporal.now.absolute()', () => {
    it('Temporal.now.instant() returns an Instant', () => assert(Temporal.now.instant() instanceof Temporal.Instant));
  });
  describe('Temporal.now.dateTime()', () => {
    it('Temporal.now.dateTime() returns a DateTime', () =>
      assert(Temporal.now.dateTime() instanceof Temporal.DateTime));
  });
  describe('Temporal.now.date()', () => {
    it('Temporal.now.date() returns a DateTime', () => assert(Temporal.now.date() instanceof Temporal.Date));
  });
  describe('Temporal.now.timeISO()', () => {
    it('Temporal.now.timeISO() returns a Time', () => assert(Temporal.now.timeISO() instanceof Temporal.Time));
  });
});

import { normalize } from 'path';
if (normalize(import.meta.url.slice(8)) === normalize(process.argv[1])) {
  report(reporter).then((failed) => process.exit(failed ? 1 : 0));
}
