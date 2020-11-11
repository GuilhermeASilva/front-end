import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	UsuarioService
} from '../usuario.service';

@Component({
	selector: 'app-lista-usuario',
	templateUrl: './lista-usuario.component.html',
	styleUrls: ['./lista-usuario.component.less']
})

export class ListaUsuarioComponent implements OnInit {

	users = []
	usersAux = []
	user
	loading = false

	constructor(private usuarioService: UsuarioService, private router: Router) {}

	ngOnInit(): void {
		this.loading = true
		this.listarUsuarios()
	}

	listarUsuarios() {
		this.usuarioService.listarUsuarios().subscribe(res => {
			this.users = res.data
			this.usersAux = this.users
			this.loading = false
		})
	}

	alterarUsuario(id: number) {
		this.router.navigateByUrl(`user/${id}`)
	}

	atualizarLista(lista) {
		this.usersAux = lista
	}
}
