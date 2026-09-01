'use strict'

/**
 * Enables Diátaxis typology detection for @antora-supplemental/nav-typology.
 * Register after nav-typology in the playbook extension list.
 */

module.exports.register = function () {
  const logger = this.getLogger('@antora-supplemental/nav-typology-diataxis')

  this.on('playbookBuilt', ({ playbook }) => {
    const keys = playbook.site.keys || (playbook.site.keys = {})
    keys.nav_typology_diataxis = 'true'
    logger.info('Diátaxis typology plugin enabled (site.keys.nav_typology_diataxis)')
  })

  try {
    require('@antora-supplemental/nav-typology/plugin-api').enablePlugin('diataxis')
  } catch {
    // build-time enrichment optional when plugin-api unavailable
  }
}
