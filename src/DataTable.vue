<template>
	<div ref="table" class="card">
		<div class="table-header">
			<span class="table-title">{{ title }}</span>
			<div class="actions">
				<span v-for="(button, index) in customButtons" :key="index">
					<a v-if="button.hide ? !button.hide : true"
						:key="index"
						href="javascript:undefined"
						class="waves-effect btn-flat nopadding"
						@click="button.onclick"
					>
						<i class="material-icons">{{ button.icon }}</i>
					</a>
				</span>
				<a v-if="printable"
					href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					@click="print"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="-15 0 457 457.143" width="20"><path d="M388.21 148.938c-.456-.368-1.003-.645-1.554-.915-.55-.183-1.097-.367-1.738-.46-1.734-.368-3.566-.184-5.211.46-1.187.454-2.195 1.188-3.02 2.008-1.644 1.649-2.648 4.024-2.648 6.492 0 2.38 1.004 4.754 2.649 6.403.824.914 1.832 1.55 3.019 2.012 1.098.457 2.285.726 3.477.726.543 0 1.187-.09 1.734-.184.64-.18 1.187-.359 1.738-.542.551-.278 1.098-.551 1.555-.825a9.828 9.828 0 001.465-1.187c1.64-1.649 2.648-4.024 2.648-6.403 0-2.468-1.008-4.753-2.648-6.492-.461-.457-.918-.82-1.465-1.094zm0 0M351.82 152.96c-.277-.55-.547-1.01-.82-1.554-.367-.46-.73-.914-1.191-1.375-2.559-2.558-6.582-3.379-9.965-2.008-1.098.454-2.102 1.188-2.926 2.008-1.734 1.739-2.742 4.024-2.742 6.492 0 1.192.273 2.38.73 3.477.461 1.094 1.098 2.102 2.012 2.926.824.914 1.828 1.55 2.926 2.012a9.202 9.202 0 003.566.726c2.375 0 4.754-1.004 6.399-2.738.914-.824 1.558-1.832 2.011-2.926.457-1.098.735-2.285.735-3.477 0-.64-.094-1.187-.184-1.828-.184-.547-.367-1.187-.55-1.734zm0 0" /><path d="M402.82 104.21h-60.98V9.146A9.144 9.144 0 00332.695 0H94.652a9.144 9.144 0 00-9.144 9.145v95.066h-60.98C11.038 104.21.07 115.18.07 128.664v197.473c0 13.488 10.97 24.457 24.457 24.457h60.98V448a9.144 9.144 0 009.145 9.145h238.043A9.144 9.144 0 00341.84 448v-97.406h60.98c13.489 0 24.457-10.969 24.457-24.457V128.664c0-13.484-10.968-24.453-24.457-24.453zM103.793 18.286h219.762v85.926H103.793zm0 420.57V263.91h219.762v174.945zm305.2-112.718a6.18 6.18 0 01-6.173 6.172h-60.98V263.91h28.687c5.047 0 9.141-4.094 9.141-9.14 0-5.051-4.094-9.145-9.14-9.145H56.82c-5.047 0-9.14 4.094-9.14 9.145 0 5.046 4.093 9.14 9.14 9.14h28.688v68.399h-60.98a6.18 6.18 0 01-6.173-6.172V128.664a6.177 6.177 0 016.172-6.168H402.82a6.177 6.177 0 016.172 6.168zm0 0" /><path d="M133.438 314.277H243.53a9.144 9.144 0 009.145-9.144c0-5.047-4.094-9.14-9.145-9.14H133.437c-5.05 0-9.144 4.093-9.144 9.14a9.144 9.144 0 009.144 9.144zm0 0M293.91 342.242H133.437c-5.05 0-9.144 4.094-9.144 9.14a9.144 9.144 0 009.144 9.145H293.91a9.144 9.144 0 009.145-9.144c0-5.047-4.094-9.14-9.145-9.14zm0 0M293.91 388.492H133.437c-5.05 0-9.144 4.094-9.144 9.14a9.144 9.144 0 009.144 9.145H293.91a9.144 9.144 0 009.145-9.144c0-5.047-4.094-9.14-9.145-9.14zm0 0" /></svg>				
				</a>
				<a v-if="exportable"
					href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					@click="exportExcel"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M282.208 19.67a16.105 16.105 0 00-13.152-3.392l-256 48A15.955 15.955 0 000 79.99v352c0 7.68 5.472 14.304 13.056 15.712l256 48a15.3 15.3 0 002.944.288c3.68 0 7.328-1.28 10.208-3.68A16.006 16.006 0 00288 479.99v-448c0-4.768-2.112-9.28-5.792-12.32zM256 460.694L32 418.71V93.27l224-41.984v409.408z" /><path d="M496 79.99H272c-8.832 0-16 7.168-16 16s7.168 16 16 16h208v288H272c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16v-320c0-8.832-7.168-16-16-16z" /><path d="M336 143.99h-64c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM336 207.99h-64c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM336 271.99h-64c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM336 335.99h-64c-8.832 0-16 7.168-16 16s7.168 16 16 16h64c8.832 0 16-7.168 16-16s-7.168-16-16-16zM432 143.99h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM432 207.99h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM432 271.99h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM432 335.99h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM220.064 309.462l-112-128c-5.888-6.688-15.968-7.328-22.592-1.504-6.656 5.824-7.328 15.936-1.504 22.56l112 128A15.951 15.951 0 00208 335.99c3.744 0 7.488-1.312 10.56-3.968 6.656-5.824 7.328-15.904 1.504-22.56z" /><path d="M217.824 163.382c-6.976-5.472-17.024-4.16-22.464 2.784l-112 144c-5.408 6.976-4.16 17.056 2.816 22.464A16.015 16.015 0 0096 335.99c4.736 0 9.472-2.112 12.608-6.144l112-144c5.44-7.008 4.192-17.056-2.784-22.464z" /></svg>
				</a>
				<a v-if="searchable"
					href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					@click="search"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z" /></svg>
				</a>
			</div>
		</div>
		<div v-if="searching">
			<div id="search-input-container">
				<label>
					<input id="search-input" v-model="searchInput" type="search" class="form-control"
						:placeholder="lang['search_data']"
					>
				</label>
			</div>
		</div>
		<div :class="parentDivClasses">
			<table ref="table" :class="tableClasses">
				<thead>
					<tr>
						<th v-if="enableCheckbox">
							<input id="select-all" type="checkbox" style="margin-right:10%;" @click="selectAll">
							<!-- <label style="position:relative;  top:-4.5px;">Select All</label> -->
						</th>
						<th v-for="(column, index) in columns"
							:key="index"
							:class="(sortable ? 'sorting ' : '')
								+ (sortColumn === index ?
									(sortType === 'desc' ? 'sorting-desc' : 'sorting-asc')
									: '')
								+ (column.numeric ? ' numeric' : '')"
							:style="{width: column.width ? column.width : 'auto'}"
							@click="sort(index)"
						>
							{{ column.label }}
						</th>
						<slot name="thead-tr" />
					</tr>
				</thead>

				<tbody>
					<tr v-for="(row, index) in paginated"
						:key="index"
						:class="{ clickable : clickable }"
						@click="click(row)"
					>
						<td v-if="enableCheckbox">
							<span v-if="checkboxValueField === ''">
								<input v-model="checkBoxes" type="checkbox" style="margin-right:10%;" :value="row">
							</span>
							<span v-else>
								<input 
									v-model="checkBoxes" 
									type="checkbox" 
									style="margin-right:10%;" 
									:value="row[checkboxValueField]"
								>
							</span>
						</td>
						<td v-for="(column, columnIndex) in columns"
							:key="columnIndex"
							:class="{ numeric : column.numeric }"
						>
							<div v-if="!column.html">
								{{ collect(row, column.field) }}
							</div>
							<div v-if="column.html" v-html="collect(row, column.field)" />
						</td>
						<slot name="tbody-tr" :row="row" />
					</tr>

					<template v-if="rows.length === 0 && loadingAnimation === true">
						<tr v-for="n in (currentPerPage === -1 ? 10 : currentPerPage)"
							:key="n"
						>
							<td :colspan="columns.length">
								<tb-skeleton :height="15" theme="opacity" bg-color="#dcdbdc" shape="radius" />
							</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>

		<div v-if="paginate" class="table-footer">
			<div :class="{'datatable-length': true, 'rtl': lang.__is_rtl}">
				<label>
					<span>{{ lang['rows_per_page'] }}:</span>
					<select class="browser-default" @change="onTableLength">
						<option v-for="(option, index) in perPageOptions"
							:key="index"
							:value="option"
							:selected="option == currentPerPage"
						>
							{{ option === -1 ? lang['all'] : option }}
						</option>
					</select>
				</label>
			</div>
			<div :class="{'datatable-info': true, 'rtl': lang.__is_rtl}">
				<span>{{ (currentPage - 1) * currentPerPage ? (currentPage - 1) * currentPerPage : 1 }}
					-{{ Math.min(processedRows.length, currentPerPage * currentPage) }}
				</span>
				<span>
					{{ lang['out_of_pages'] }}
				</span>
				<span>
					{{ processedRows.length }}
				</span>
			</div>
			<div>
				<ul class="material-pagination">
					<li>
						<a href="javascript:undefined"
							class="waves-effect btn-flat"
							tabindex="0"
							@click.prevent="previousPage"
						>
							<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M492 236H68.442l70.164-69.824c7.829-7.792 7.859-20.455.067-28.284-7.792-7.83-20.456-7.859-28.285-.068l-104.504 104-.018.019c-7.809 7.792-7.834 20.496-.002 28.314l.018.019 104.504 104c7.828 7.79 20.492 7.763 28.285-.068 7.792-7.829 7.762-20.492-.067-28.284L68.442 276H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z" /></svg>
						</a>
					</li>
					<li>
						<a href="javascript:undefined"
							class="waves-effect btn-flat"
							tabindex="0"
							@click.prevent="nextPage"
						>
							<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z" /></svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import 'tb-skeleton/dist/skeleton.css';
	import propsObject from './props';
	import Fuse from 'fuse.js';
	import locales from './locales';
	import { TbSkeleton } from 'tb-skeleton';

	export default {
		components: {
			TbSkeleton,
		},

		props: propsObject,

		data: () => ({
			currentPage: 1,
			currentPerPage: 10,
			sortColumn: -1,
			sortType: 'asc',
			searching: false,
			searchInput: '',
			checkBoxes: [],
		}),

		methods: {
			nextPage() {
				if (this.processedRows.length > this.currentPerPage * this.currentPage)
					++this.currentPage;
			},

			previousPage() {
				if (this.currentPage > 1)
					--this.currentPage;
			},

			onTableLength(e) {
				this.currentPerPage = parseInt(e.target.value);
			},

			sort(index) {
				if (!this.sortable)
					return;
				if (this.sortColumn === index) {
					this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
				} else {
					this.sortType = 'asc';
					this.sortColumn = index;
				}
			},

			search(e) {
				this.searching = !this.searching;
			},

			click(row) {
				if(!this.clickable){
					return;
				}

				if(getSelection().toString()){
					// Return if some text is selected instead of firing the row-click event.
					return;
				}

				this.$emit('row-click', row);
			},

			exportExcel() {
				const mimeType = 'data:application/vnd.ms-excel';
				const html = this.renderTable().replace(/ /g, '%20');

				// eslint-disable-next-line eqeqeq
				const documentPrefix = this.title != '' ? this.title.replace(/ /g, '-') : 'Sheet';
				const d = new Date();

				const dummy = document.createElement('a');
				dummy.href = mimeType + ', ' + html;
				dummy.download = documentPrefix
					+ '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
					+ '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
					+ '.xls';
				document.body.appendChild(dummy);
				dummy.click();
			},

			print() {
				const clonedTable = this.$refs.table.cloneNode(true);
				this.synchronizeCssStyles(this.$refs.table, clonedTable, true);

				clonedTable.style.maxWidth = '100%';
				clonedTable.style.boxShadow = '0px 0px 0px 1px rgba(0,0,0,0.2)';
				clonedTable.style.margin = '8px auto';
				clonedTable.querySelector('.actions').remove();
				clonedTable.querySelector('.material-pagination').remove();
				clonedTable.querySelector('.datatable-length').remove();

				clonedTable.querySelectorAll('button').forEach(n => n.remove());

				let win = window.open('', '');


				win.document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
				win.document.body.innerHTML = (clonedTable.outerHTML);

				win.print();

				win.close();
			},

			renderTable() {
				let table = '<table><thead>';

				table += '<tr>';
				for (let i = 0; i < this.columns.length; i++) {
					const column = this.columns[i];
					table += '<th>';
					table += 	column.label;
					table += '</th>';
				}
				table += '</tr>';

				table += '</thead><tbody>';

				for (let i = 0; i < this.rows.length; i++) {
					const row = this.rows[i];
					table += '<tr>';
					for (let j = 0; j < this.columns.length; j++) {
						const column = this.columns[j];
						table += '<td>';
						table +=	this.collect(row, column.field);
						table += '</td>';
					}
					table += '</tr>';
				}

				table += '</tbody></table>';

				return table;
			},

			dig(obj, selector) {
				let result = obj;
				const splitter = selector.split('.');

				for (let i = 0; i < splitter.length; i++) {
					if (result === undefined)
						return undefined;

					result = result[splitter[i]];
				}

				return result;
			},

			collect(obj, field) {
				if (typeof(field) === 'function')
					return field(obj);
				else if (typeof(field) === 'string')
					return this.dig(obj, field);
				else
					return undefined;
			},

			selectAll() {
				let masterCheckbox = document.querySelectorAll(
					'thead input[type=\'checkbox\']',
				);
				let otherCheckboxes = document.querySelectorAll(
					'tbody input[type=\'checkbox\']',
				);
				for (let i = 0; i < otherCheckboxes.length; i++) {
					const checkbox = otherCheckboxes[i];
					if(masterCheckbox[0].checked !== checkbox.checked){
						checkbox.click();
					}
				}
			},

			/* https://codebottle.io/s/31b70f5391
			 *
			 * @author: Luigi D'Amico (www.8bitplatoon.com)
			 */
			synchronizeCssStyles(src, destination, recursively) {
				destination.style.cssText = this.getComputedStyleCssText(src);

				if (recursively) {
					const vSrcElements = src.getElementsByTagName('*');
					const vDstElements = destination.getElementsByTagName('*');

					for (var i = vSrcElements.length; i--;) {
						const vSrcElement = vSrcElements[i];
						const vDstElement = vDstElements[i];
						vDstElement.style.cssText = this.getComputedStyleCssText(vSrcElement);
					}
				}
			},

			// https://gist.github.com/johnkpaul/1754808
			//
			// Please delete Firefox.
			getComputedStyleCssText(element) {
				const cssObject = window.getComputedStyle(element);
				const cssAccumulator = [];

				if (cssObject.cssText !== ''){
					return cssObject.cssText;
				}

				for (let prop in cssObject){
					if (typeof cssObject[prop] === 'string'){
						cssAccumulator.push(prop + ' : ' + cssObject[prop]);
					}
				}

				return cssAccumulator.join('; ');
			},
			
		},

		watch: {
			perPageOptions(newOptions, oldOptions) {
				// If defaultPerPage is provided and it's a valid option, set as current per page
				if (newOptions.indexOf(this.defaultPerPage) > -1) {
					this.currentPerPage = parseInt(this.defaultPerPage);
				} else {
					// Set current page to first value
					this.currentPerPage = newOptions[0];
				}
			},

			searchInput(newSearchInput) {
				if (this.searching && this.serverSearch && this.serverSearchFunc)
					this.serverSearchFunc(newSearchInput);
			},

			checkBoxes() {
				this.$emit('checked-boxes', this.checkBoxes);
			},
		},

		computed: {
			perPageOptions() {
				let options = (Array.isArray(this.perPage) && this.perPage) || [10, 20, 30, 40, 50];

				// Force numbers
				options = options.map(v => parseInt(v));


				// Sort options
				options.sort((a,b) => a - b);

				// And add "All"
				options.push(-1);


				return options;
			},

			processedRows() {
				let computedRows = this.rows;

				if (this.sortable !== false)
					computedRows = computedRows.sort((x,y) => {
						if (!this.columns[this.sortColumn])
							return 0;

						const cook = x => {
							x = this.collect(x, this.columns[this.sortColumn].field);
							if (typeof(x) === 'string') {
								x = x.toLowerCase();
								if (this.columns[this.sortColumn].numeric)
									x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
							}
							return x;
						};

						x = cook(x);
						y = cook(y);

						return (x < y ? -1 : (x > y ? 1 : 0)) * (this.sortType === 'desc' ? -1 : 1);
					});

				if (this.searching && !this.serverSearch && this.searchInput) {
					const searchConfig = { keys: this.columns.map(c => c.field) };

					// Enable searching of numbers (non-string)
					// Temporary fix of https://github.com/krisk/Fuse/issues/144
					searchConfig.getFn = (obj, path) => {
						const property = this.dig(obj, path);
						if(Number.isInteger(property))
							return JSON.stringify(property);
						return property;
					};

					if (this.exactSearch) {
						//return only exact matches
						searchConfig.threshold = 0,
						searchConfig.distance = 0;
					}

					computedRows = (new Fuse(computedRows, searchConfig)).search(this.searchInput);
				}

				return computedRows;
			},

			paginated() {
				let paginatedRows = this.processedRows;

				if (this.paginate && this.currentPerPage !== -1)
					paginatedRows = paginatedRows.slice(
						(this.currentPage - 1) * this.currentPerPage,
						this.currentPerPage === -1 ? paginatedRows.length + 1 : this.currentPage * this.currentPerPage,
					);

				return paginatedRows;
			},

			lang() {
				return this.locale in locales ? locales[this.locale] : locales['en'];
			},
		},

		mounted() {
			if (!(this.locale in locales))
				console.error(`vuejs-datable: Invalid locale '${this.locale}'`);
			this.sortColumn = this.initSortCol;
		},
	};
</script>

<style src="./style.css" scoped>

</style>