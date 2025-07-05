/**
 * Simple data model for hero as a type of actor
 */
export default class HeroData extends foundry.abstract.TypeDataModel {
  /**
   * Metadata that describes this subtype.
   * @type {object}
   */
  static metadata = Object.freeze({
    type: "hero"
  });

  /* -------------------------------------------------- */

  /** @inheritdoc */
  static LOCALIZATION_PREFIXES = ["UTS.Hero"];

  /* -------------------------------------------------- */

  /** @inheritdoc */
  static defineSchema() {
    return {
      // Define hero-specific fields here
      // Example:
      name: new foundry.data.fields.StringField({
        required: true,
        initial: "Unnamed Hero"
      })
    };
  }
}
