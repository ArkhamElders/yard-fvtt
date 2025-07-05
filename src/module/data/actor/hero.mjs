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
      name: new foundry.data.fields.StringField({ required: true, initial: "Unnamed Hero" }),
      attributes: new foundry.data.fields.SchemaField({
        str: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        con: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        dex: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        int: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        wis: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        cha: new foundry.data.fields.NumberField({ required: true, initial: 10 }),
        move: new foundry.data.fields.NumberField({ required: true, initial: 6 }),
        det: new foundry.data.fields.NumberField({ required: true, initial: 3 })
      }),
      details: new foundry.data.fields.SchemaField({
        profession: new foundry.data.fields.StringField({ initial: "" }),
        age: new foundry.data.fields.StringField({ initial: "" }),
        origin: new foundry.data.fields.StringField({ initial: "" }),
        xp: new foundry.data.fields.NumberField({ initial: 0 })
      }),
      status: new foundry.data.fields.SchemaField({
        stamina: new foundry.data.fields.SchemaField({
          value: new foundry.data.fields.NumberField({ initial: 0 })
        }),
        mana: new foundry.data.fields.SchemaField({
          value: new foundry.data.fields.NumberField({ initial: 0 })
        })
      })
    };
  }
}
