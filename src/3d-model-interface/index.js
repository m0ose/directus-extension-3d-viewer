import InterfaceComponent from './interface.vue';

export default {
	id: '3d-model-interface',
	name: '3D Model Viewer',
	icon: 'box',
	description: 'This is my custom interface!',
	component: InterfaceComponent,
	options: [
		{
			field: 'camera_controls',
			name: 'Camera Controls',
			schema: {
				default_value: true,
			},
			meta: {
				interface: 'boolean',
				options: {
					label: '$t:enable_select_button',
				},
				width: 'half',
			},
		},
		{
			field: 'auto_rotate',
			name: 'Auto Rotate',
			schema: {
				default_value: true,
			},
			meta: {
				interface: 'boolean',
				options: {
					label: '$t:enable_select_button',
				},
				width: 'half',
			},
		},
		{
			field: 'folder',
			name: '$t:interfaces.system-folder.folder',
			type: 'uuid',
			meta: {
				width: 'half',
				interface: 'system-folder',
				note: '$t:interfaces.system-folder.field_hint',
			},
		},
		{
			field: 'shadow_intensity',
			name: 'Shadow Intensity',
			type: 'integer',
			schema: {
				default_value: 1,
			},
			meta: {
				interface: 'input',
				width: 'half',
			},
		},
	],
	types: ['json'],
	group: 'relational',
	recommendedDisplays: ['3d-model-display'],
};
