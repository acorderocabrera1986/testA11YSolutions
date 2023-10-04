Feature: Rellenar datos en la aplicacón web Gestionar Tareas

  Background:
    When visito la url "localhost:4200"

  @done
  Scenario: Dar clic en el botón Adicionar tarea
    When doy clic en el botón Adicionar tarea

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con datos válidos
    When introduzco valores al formulario Adicionar tarea con datos válidos
    When doy clic en el botón Submit
    Then debo ver los datos de la tarea recien creada en la lista

  @done
  Scenario: Dejar en blanco los campos del formulario Adicionar tarea
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con el campo Título en blanco
    When introduzco valores al formulario Adicionar tarea con el campo Título en blanco
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con el campo Descripción en blanco
    When introduzco valores al formulario Adicionar tarea con el campo Descripción en blanco
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con el campo Título en blanco con mensaje de error
    When introduzco valores al campo Título
    Then debo ver el mensaje "Por favor ingresar Título" en el campo Título
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con el campo Descripción en blanco con mensaje de error
    When introduzco valores al campo Descripción
    Then debo ver el mensaje "Por favor ingresar Descripción" en el campo Descripción
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Rellenar el formulario de Adicionar tarea con datos válidos y luego setear los campos
    When introduzco valores al formulario Adicionar tarea con datos válidos
    When doy clic en el botón Reset
    Then debo ver el botón Submit deshabilitado

  @done
  Scenario: Eliminar tarea adicionada
    When introduzco valores al formulario Adicionar tarea con datos válidos
    When doy clic en el botón Submit
    When doy clic en el botón Eliminar de la tarea adicionada
    Then no debo ver la tarea adicionada

  @done
  Scenario: Eliminar tarea adicionada usando la opción de eliminar múltiple
    When introduzco valores al formulario Adicionar tarea con datos válidos
    When doy clic en el botón Submit
    When doy clic en el checkbox seleccionar tareas
    When doy clic en el botón Eliminar múltiple de la barra de acciones
    Then no debo ver la tarea adicionada

  @done
  Scenario: Marcar una tarea como completada
    When introduzco valores al formulario Adicionar tarea con datos válidos
    When doy clic en el botón Submit
    When doy clic en el botón marcar como completada de la tarea adicionada
    Then debo ver que la tarea fue marcada como completada