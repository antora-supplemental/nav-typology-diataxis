'use strict'

const { enablePlugin } = require('@antora-supplemental/nav-typology/plugin-api')

/**
 * Enables Diátaxis typology detection in @antora-supplemental/nav-typology.
 * Register after nav-typology in the playbook extension list.
 */

module.exports.register = function () {
  enablePlugin('diataxis')
  const logger = this.getLogger('@antora-supplemental/nav-typology-diataxis')
  logger.info('Diátaxis typology plugin enabled')
}
