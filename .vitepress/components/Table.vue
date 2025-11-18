<template>
  <div class="responsive table-wrapper">
    <table class="border">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header" class="center-align">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, index) in data" :key="index">
          <!-- Main row -->
          <tr
            class="clickable hover"
            @click="toggleRow(index)"
            :class="{ active: expandedRows.has(index) }"
          >
            <td
              v-for="header in headers"
              :key="header"
              class="center-align table-row"
              v-html="row.summary[header] || ''"
            ></td>
          </tr>
          <!-- Expanded content row -->
          <tr v-if="expandedRows.has(index)" class="expanded-content">
            <td :colspan="headers.length" class="padding">
              <div class="expanded-text" v-html="row.content"></div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

/**
 * @typedef {Object} TableRowData
 * @property {Object.<string, string>} summary - Key-value pairs for each column header
 * @property {string} content - Detailed content shown when row is expanded
 */

/**
 * @typedef {Object} TableProps
 * @property {string[]} headers - Array of column header names
 * @property {TableRowData[]} data - Array of row data objects
 */

// Props
defineProps({
  headers: {
    /** @type {import('vue').PropType<string[]>} Array of column header names */
    type: Array,
    required: true,
    default: () => [],
  },
  data: {
    /** @type {import("vue").PropType<TableRowData[]>} Array of row data objects with summary and content */
    type: Array,
    required: true,
    default: () => [],
  },
});

// State for tracking expanded rows
const expandedRows = ref(new Set());
/**
 * 
 * @param {number} index 
 */
// Toggle row expansion
const toggleRow = (index) => {
  if (expandedRows.value.has(index)) {
    expandedRows.value.delete(index);
  } else {
    expandedRows.value.add(index);
  }
  // Trigger reactivity
  expandedRows.value = new Set(expandedRows.value);
};
</script>

<style scoped>
.table-wrapper {
  display: flex;
  justify-content: center;
  width: 100dvw;
}

.table-row {
  @media screen and (min-width: 768px) {
    min-width: 25rem;
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }
}
.clickable {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.clickable:hover {
  background-color: var(--surface-variant);
}

.clickable.active {
  background-color: var(--primary-container);
}

.expanded-content {
  background-color: var(--surface-container);
}

.expanded-text {
  padding: 1rem;
  border-left: 4px solid var(--secondary);
  background-color: var(--surface-container-high);
  border-radius: 4px;
  line-height: 1.6;
}
.center-align {
  text-align: center;
}
</style>
