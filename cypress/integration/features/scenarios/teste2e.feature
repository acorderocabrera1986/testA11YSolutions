Feature: Rellenar datos en el formulario que se encuentra en el footer del sitio https://www.a11ysolutions.com/

  Background:
    When visito la url "www.a11ysolutions.com/"

  @done
  Scenario: Rellenar el formulario del footer con datos válidos
    When introduzco valores al formulario con datos válidos  

  @done
  Scenario: Rellenar el formulario del footer con el campo Name sin completar
    When introduzco valores al formulario con el campo Name sin completar
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter a name" en el campo Name

  @done
  Scenario: Rellenar el formulario del footer con el campo Phone number sin completar
    When introduzco valores al formulario con el campo Phone number sin completar
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter your phone number" en el campo Phone number

  @done
  Scenario: Rellenar el formulario del footer con el campo Company name sin completar
    When introduzco valores al formulario con el campo Company name sin completar
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter the name of your company" en el campo Company name

  @done
  Scenario: Rellenar el formulario del footer con el campo Email sin completar
    When introduzco valores al formulario con el campo Email sin completar
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter an email address" en el campo Email

  @done
  Scenario: Rellenar el formulario del footer con el campo Phone number intoduciendo una letra
    When introduzco valores al formulario con el campo Phone number intoduciendo una letra
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter a valid phone number" en el campo Phone number

  @done
  Scenario Outline: No permitir introducir un correo electrónico inválido "<type>" en el campo correspondiente
    When introduzco valores al formulario con el correo "<type>" inválido
    When doy clic en el botón Submit now
    Then debo ver el mensaje "Please enter a valid email" en el campo Phone number

    Examples:
      | type         |
      | prueba@yahoo |
      | @test.cu     |
      | 11111@.cu    |

